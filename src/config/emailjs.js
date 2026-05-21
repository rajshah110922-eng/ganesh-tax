// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (connect Gmail: Email Services → Add New Service)
// 3. Create a Template with variables {{otp}} and {{to_name}}
//    Subject: GTC Admin — Password Reset OTP
//    Body:    Your one-time password is: {{otp}}  (valid for 10 minutes)
// 4. Copy the IDs below from your EmailJS dashboard

export const EMAILJS_SERVICE_ID  = 'service_9gxzkd7'   // e.g. 'service_abc123'
export const EMAILJS_TEMPLATE_ID = 'template_pl9hs9u'  // e.g. 'template_xyz789'
export const EMAILJS_PUBLIC_KEY  = 'n8JQEvFFNkVaz295O'   // Account → API Keys → Public Key

// Email address that will RECEIVE the OTP (must be the Gmail you connected above)
export const RECOVERY_EMAIL = 'ganeshtaxconsultancy.1126@gmail.com'
