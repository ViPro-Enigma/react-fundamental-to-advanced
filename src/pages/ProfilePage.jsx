import React from "react";
import { useParams } from "react-router-dom";
import { withParams } from "../hoc/withParams";

const ProfilePage = () => {
  const params = useParams();

  return (
    <div className="h-screen flex justify-center items-center flex-col w-screen">
      <h1 className="text-3xl font-semibold">Profile Page</h1>
      <p className="text-xl font-bold text-red-500">{params.nama}</p>
    </div>
  );
};

export default ProfilePage;

// class ProfilePage extends React.Component {
//   render() {
//     return (
//       <div className="h-screen flex justify-center items-center flex-col w-screen">
//         <h1 className="text-3xl font-semibold">Profile Page</h1>
//         <p className="text-xl font-bold text-red-500">
//           {this.props.params.username}
//         </p>
//       </div>
//     );
//   }
// }

// export default withParams(ProfilePage);
