import { Admin } from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input";

export default function admin() {
  return (
    <div>
      Admin
      <Admin />
      <InputBox />
    </div>
  );
}
