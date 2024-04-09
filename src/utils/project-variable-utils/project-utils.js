import Cookies from "js-cookie";

export const baseUrl = "https://crs-backend.vercel.app/api";
//export const baseUrl = "http://localhost:4000/api";

export const headersFunction = () => {
  const token = Cookies.get("token");
  const headersvalue = { headers: { Authorization: `Bearer ${token}` } };
  return headersvalue;
};
export const linkedinUrl =
  "https://www.linkedin.com/in/saim-shahzad-476bba25b/";
export const githubUrl = "https://github.com/saimshahzad2030";
export const facebookUrl = "https://www.facebook.com/sheikh.saim.10";
export const twitterUrl = "https://twitter.com/saimshehzad10";
export const instaUrl =
  "https://instagram.com/saim_shahzad_321?igshid=MzNlNGNkZWQ4Mg==";
