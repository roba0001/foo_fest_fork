import { postInfo } from "@/lib/supabase";

export default function Form({ children }) {
  async function sendData(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("tel"),
    };
    await postInfo(data);

    revalidatePath("/");
  }

  return (
    <form action={sendData} className="flex flex-col gap-5">
      {children}
    </form>
  );
}
