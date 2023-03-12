import EmailItems from "./emailItems";

export default function EmailDrawer({ company }) {

  const emailEx = {
    Text1: [
      "Tiktok Careers: Thank you for applying - Intern - Data Engineer",
      "Dear Siddhant, ",
      "We are delighted you are keen to..."
    ],
    Text2: [
      "Your Tiktok Internship Programme application: Reminder for the Online Assessment (Part A)",
      "Dear Siddhant,",
      "Many thanks for your application to Tiktok..."
    ],
    Text3: [
      "Invitation: Interview with Tiktok @ Tue 14 Mar 2023",
      "Hi Siddhant Pathak - Confirming your interview. You will be interviewing with..."
    ]
  }

  return (
    <div className="w-full h-full items-start pt-14 bg-[#1E1F22] opacity-90">
      <div className=" w-full flex flex-wrap items-center ">
        <div className="flex justify-around text-white font-bold text-2xl items-center w-full  mb-10">{company}</div>
        <EmailItems text={emailEx.Text1} company={company}/>
        <EmailItems text={emailEx.Text2} company={company}/>
        <EmailItems text={emailEx.Text3} company={company}/>
      </div>
    </div>
  );
}
