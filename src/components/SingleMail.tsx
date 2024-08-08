import React from 'react'

interface SingleProps {
  currTheme: Boolean;
  subject: string;
  fromEmail: string;
  toEmail: string;
  body: string
}
const SingleMail: React.FC<SingleProps> = ({ currTheme, subject, fromEmail, toEmail, body }) => {
  return (
    <div style={{ borderRadius: "10px",background: "#141517", border: "2px solid #343A40", padding: "20px", width: "760px", fontSize: "14px", marginTop: "20px", display: "flex", flexDirection: "column", justifyContent: "start"}}>
      <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
        <p style={{fontWeight: "500", fontSize: "16px"}}>{subject}</p>
        <p style={{color: "#7F7F7F"}}>20 june 2022 : 9:16AM</p>
      </div>
      <p style={{textAlign: "left", color: "#7F7F7F", paddingTop: "8px"}}>from : {fromEmail} </p>
      <p style={{textAlign: "left", color: "#7F7F7F", paddingTop: "8px"}}>to : {toEmail}</p>
      <p style={{paddingTop: "14px", textAlign: "left", color: currTheme ? "text-[#b7abab]" : "text-[#2a2626]"}}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",")[0]} ,</p>
      <p style={{paddingTop: "5zpx", textAlign: "left",color: currTheme ? "text-[#b7abab]" : "text-[#2a2626]"}}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",").slice(1)}</p>

    </div>
  )
}

export default SingleMail
