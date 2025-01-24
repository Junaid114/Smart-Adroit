import { EmailAdmin, sendEmail } from '@/components/utils/sendEmail';
import { NextResponse, NextRequest } from 'next/server';



export async function POST(request:NextRequest,response:NextResponse){
  const {name,email,message} = await request.json()   
  
  try{
 
    const htmlBody = await EmailAdmin(
         name,
         email,
         message
    )
   
    await sendEmail({
        to: 'smartadroitsoftware@gmail.com', 
        from:email,
        subject: 'New Contact Form Submission',
        htmlTemplat: htmlBody, 
      });
      console.log(htmlBody)
 return NextResponse.json('Your request send')
  }catch(error){
    return NextResponse.json("Error while sending request")
  }
  
}