import { FooterContent, Paragraph, Link } from "./Footer.Style";

export default function Footer() {
  return (
    <>
      <FooterContent>
        <Paragraph>
          Feito com código e React.{" "}
          <Link href="https://github.com/silv4b/site-react" target="_blank">
            Esse projeto tá aqui.
          </Link>
        </Paragraph>
        <box-icon id="boxIcon" type="logo" name="react" color="grey" />
      </FooterContent>
    </>
  );
}
