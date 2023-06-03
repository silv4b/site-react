import style from "./ProfileData.module.scss";

export default function ProfileData() {
  return (
    <>
      <div className={style.profile_container}>
        <div className={style.profile}>
          <img src="https://avatars.githubusercontent.com/u/17997794?v=4" />
        </div>
      </div>
      <h2>Bruno Silva | @silv4b</h2>
      <p style={{ color: "grey" }}>Designer de Interfaces e Desenvolvedor</p>
    </>
  );
}
