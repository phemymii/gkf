import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, formData } = body;
    console.log(formType, formData);

    // Validate required fields
    if (!formType || !formData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let html = "";
    let subject = "";

    switch (formType) {
      case "partner":
        const { organization, contactName, email, phone, message } = formData;
        subject = "New Partnership Request";
        html = `
          <h2>New Partnership Request</h2>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `;
        break;

      case "sponsor":
        const {
          sponsorName,
          sponsorEmail,
          sponsorPhone,
          amount,
          frequency,
          message: sponsorMessage,
        } = formData;
        subject = "New Sponsorship Request";
        html = `
          <h2>New Sponsorship Request</h2>
          <p><strong>Name:</strong> ${sponsorName}</p>
          <p><strong>Email:</strong> ${sponsorEmail}</p>
          <p><strong>Phone:</strong> ${sponsorPhone}</p>
          <p><strong>Amount:</strong> ${amount}</p>
          <p><strong>Frequency:</strong> ${frequency}</p>
          <p><strong>Message:</strong></p>
          <p>${sponsorMessage}</p>
        `;
        break;

      case "volunteer":
        const {
          volunteerName,
          volunteerEmail,
          volunteerPhone,
          areas,
          availability,
          message: volunteerMessage,
        } = formData;
        subject = "New Volunteer Application";
        html = `
          <h2>New Volunteer Application</h2>
          <p><strong>Name:</strong> ${volunteerName}</p>
          <p><strong>Email:</strong> ${volunteerEmail}</p>
          <p><strong>Phone:</strong> ${volunteerPhone}</p>
          <p><strong>Areas of Interest:</strong> ${areas.join(", ")}</p>
          <p><strong>Availability:</strong> ${availability}</p>
          <p><strong>Message:</strong></p>
          <p>${volunteerMessage}</p>
        `;
        break;

      case "follow":
        const {
          followName,
          followEmail,
          followPhone,
          socialMedia,
          message: followMessage,
        } = formData;
        subject = "New Follow Us Request";
        html = `
          <h2>New Follow Us Request</h2>
          <p><strong>Name:</strong> ${followName}</p>
          <p><strong>Email:</strong> ${followEmail}</p>
          <p><strong>Phone:</strong> ${followPhone}</p>
          <p><strong>Preferred Social Media:</strong> ${socialMedia.join(
            ", "
          )}</p>
          <p><strong>Message:</strong></p>
          <p>${followMessage}</p>
        `;
        break;

      default:
        return NextResponse.json(
          { error: "Invalid form type" },
          { status: 400 }
        );
    }

    // Send email
    const result = await sendEmail({
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "",
      subject,
      html,
    });

    if (!result.success) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing volunteer form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
