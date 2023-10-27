export const Header = () => {
 function partyMode() {
  let element = document.body;
  element.classList.toggle("party-mode");
 }
 return (
  <h1>
   <img onClick={partyMode} className="header-icon" src="/icon.png" alt="an icon of a cartoon newspaper" />
   NC News
  </h1>
 );
};
