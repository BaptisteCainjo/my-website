import NavBar from "@/components/NavBar/NavBar";
import BlogStyle from "@/scss/pages/Blog.module.scss";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function page() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "documentation-web-equilibre-dev-ux.md"
  );
  console.log(filePath);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return (
    <>
      <NavBar />
      <section className={BlogStyle.container}>
        <ReactMarkdown>{fileContent}</ReactMarkdown>
      </section>
    </>
  );
}
