import {
  UserBlock,
  ProfileBtnBlock,
  BioBlockName,
  Image,
  BioBlockEmail,
} from "./styles";
import Images from "assets/images";

const { juryIcon } = Images;

function User({darkMode}) {
  return (
    <UserBlock>
      <Image src={juryIcon} alt="User avatar" />
      <BioBlockName>Andy Samberg</BioBlockName>
      <BioBlockEmail>andy.samberg@gmail.com</BioBlockEmail>
      <br />
      <ProfileBtnBlock darkMode={darkMode}>View Profile</ProfileBtnBlock>
    </UserBlock>
  );
}

export default User;
