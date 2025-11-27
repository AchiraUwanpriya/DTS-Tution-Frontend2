
// import { useNavigate, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Modal from "../components/common/Modal";
import Profile from "./Profile";

const ProfileModal = () => {
  const navigate = useNavigate();
// <<<<<<< HEAD
  // const location = useLocation();

  // // If the modal was opened with a background location (via state.backgroundLocation)
  // // navigate back to that exact pathname when closing. This avoids history -1 which
  // // in some cases causes the profile modal to re-open immediately.
  // const handleClose = () => {
  //   const bg = location.state && location.state.backgroundLocation;
  //   if (bg && bg.pathname) {
  //     const path = bg.pathname + (bg.search || "") + (bg.hash || "");
  //     navigate(path, { replace: true });
  //   } else {
  //     navigate("/", { replace: true });


  const handleClose = () => {
    // go back to previous route; if none, fallback to root
    try {
      navigate(-1);
    } catch (e) {
      navigate("/");

    }
  };

  return (
    <Modal isOpen={true} onClose={handleClose} title="Profile">
      <Profile />
    </Modal>
  );
};

export default ProfileModal;
