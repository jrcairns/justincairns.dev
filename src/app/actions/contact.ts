'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const link = formData.get('link') as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'New Submission <submissions@justincairns.dev>',
            to: process.env.PERSONAL_EMAIL as string,
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Link: ${link || 'Not provided'}
            `,
        });

        if (error) {
            console.error('Error sending email:', error);
            return { success: false, message: 'Error sending email' };
        }

        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Error sending email' };
    }
}