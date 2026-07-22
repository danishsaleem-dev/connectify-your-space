import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

type Field = {
  name: keyof z.infer<typeof schema>;
  label: string;
  type?: string;
  placeholder?: string;
  full?: boolean;
  textarea?: boolean;
};

export function RequestForm({
  title,
  subtitle,
  companyLabel = "Company / Brand",
  subjectLabel = "Subject",
  submitLabel = "Submit request",
  intro,
}: {
  title: string;
  subtitle: string;
  companyLabel?: string;
  subjectLabel?: string;
  submitLabel?: string;
  intro?: ReactNode;
}) {
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const fields: Field[] = [
    { name: "name", label: "Full name", placeholder: "Jane Doe" },
    { name: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
    { name: "phone", label: "Phone", placeholder: "+971 55 000 0000" },
    { name: "company", label: companyLabel, placeholder: "Your brand or company" },
    { name: "subject", label: subjectLabel, placeholder: "How can we help?", full: true },
    { name: "message", label: "Message", placeholder: "Share details about your request…", full: true, textarea: true },
  ];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate submission — hook up to backend later.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setDone(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-page grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Request service
          </span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
          {intro && <div className="mt-6 text-sm text-muted-foreground">{intro}</div>}
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
            {done ? (
              <div className="flex flex-col items-center py-16 text-center">
                <div className="rounded-full bg-primary-soft p-4 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. Our team will review your request and get
                  back to you within one business day.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-6 text-sm font-medium text-primary hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2" noValidate>
                {fields.map((f) => (
                  <div key={f.name} className={f.full ? "md:col-span-2" : ""}>
                    <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-foreground">
                      {f.label}
                    </label>
                    {f.textarea ? (
                      <textarea
                        id={f.name}
                        name={f.name}
                        rows={5}
                        placeholder={f.placeholder}
                        maxLength={2000}
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    ) : (
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type ?? "text"}
                        placeholder={f.placeholder}
                        maxLength={200}
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    )}
                    {errors[f.name] && (
                      <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>
                    )}
                  </div>
                ))}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 md:w-auto"
                  >
                    {loading ? "Sending…" : submitLabel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
