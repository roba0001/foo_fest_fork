import { revalidatePath } from "next/cache";
import { postInfo } from "@/lib/supabase";

export default function TestForm() {
  async function sendData(formData) {
    "use server";

    console.log("form indsendt");
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await postInfo(data);

    revalidatePath("/");
  }

  return (
    <form action={sendData} className="bg-blue-100 p-5 flex flex-col">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />

      <button className="bg-blue-300 p-2 hover:bg-blue-400" type="submit">
        Submit form
      </button>
    </form>
  );
}
