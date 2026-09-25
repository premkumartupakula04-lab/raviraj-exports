/**
 * Generates and triggers download of a standardized vCard (.vcf)
 * for Sadhu Sivs Sankar Rao, Managing Director of Raviraj Spices Exports Pvt Ltd
 */
export function downloadVCard() {
  const vcardContent = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN;CHARSET=UTF-8:Sadhu Sivs Sankar Rao",
    "N;CHARSET=UTF-8:Rao;Sadhu Sivs Sankar;;;",
    "ORG;CHARSET=UTF-8:Raviraj Spices Exports Pvt Ltd",
    "TITLE;CHARSET=UTF-8:Managing Director",
    "TEL;TYPE=CELL,VOICE,PREF:+919246777627",
    "EMAIL;TYPE=INTERNET,WORK,PREF:info@ravirajspices.in",
    "URL;TYPE=WORK:https://ravirajspices.in",
    "ADR;TYPE=WORK,POSTAL,PARCEL;CHARSET=UTF-8:;;23-11-124, Sadhu Complex, Eluru Bazar;Guntur;Andhra Pradesh;522003;India",
    "NOTE;CHARSET=UTF-8:Managing Director - Raviraj Spices Exports Pvt Ltd. 30+ Years of Spice & Agricultural Experience in Guntur, Andhra Pradesh, India. Specializing in Guntur Red Chillies, Turmeric, and Coriander.",
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Sadhu_Sivs_Sankar_Rao_Raviraj_Spices.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
