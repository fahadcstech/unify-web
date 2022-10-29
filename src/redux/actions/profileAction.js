import Axios from "../axios";
import {
  SET_ADD_EXPRIENCE,
  SET_CLIENT_INFO_DETAILS,
  SET_CLOSE_ACCOUNT_REASON_LIST,
  SET_DELETE_EXPRIENCE,
  SET_EDIT_CLIENT_INFO,
  SET_FREELANCER_PROFILE,
  SET_FREELANCER_SKILLS,
  SET_INDUSTRIES_LIST,
  SET_TIMEZONE_LIST,
  SET_DEGREE_LIST,
  SET_DELETE_EDUCATION,
  SET_EDIT_FREELANCER_INFO,
  SET_EDIT_FREELANCER_LOCATION,
  SET_EDIT_LANGUAGE,
  SET_LANGUAGE_LIST,
  SET_HWP_LIST,
  SET_HOURS_PER_WEEK,
  SET_EDIT_SKILLS,
  SET_EDIT_CERTIFICATE,
  SET_DELETE_CERTIFICATE,
  SET_PROFILE_IMG_CHANGE,
  SET_EDIT_TESTIMONIAL,
  SET_EDIT_EDUCATION,
  SET_EDIT_DESIGNATION,
  SET_EDIT_PORTFOLIO,
  SET_EDIT_VIDEO,
  SET_VISIBLITY,
  SET_EXPRIENCE_LEVEL,
  SET_DELETE_PORTFOLIO,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

// FREELANCER
export const onEditTestimonialInfo = (data) => (dispatch) => {
  Axios.post("/edit-testimonial-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_EDIT_TESTIMONIAL,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFreelancerProfile = () => (dispatch) => {
  Axios.get("/get-freelancer-profile", config)
    .then((res) => {
      dispatch({
        type: SET_FREELANCER_PROFILE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getFreelancerSkills = (data) => (dispatch) => {
  Axios.post("/skill-list", data)
    .then((res) => {
      dispatch({
        type: SET_FREELANCER_SKILLS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onAddEmployment = (data, popup) => (dispatch) => {
  Axios.post("/edit-employment-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_ADD_EXPRIENCE,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onDeleteEmployment = (data) => (dispatch) => {
  Axios.post("/delete-employment-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_DELETE_EXPRIENCE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// CLIENT
export const getClientInfoDetails = (data) => (dispatch) => {
  Axios.get("/get-client-info", config)
    .then((res) => {
      dispatch({
        type: SET_CLIENT_INFO_DETAILS,
        payload: res.data.data.client,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getIndustriesList = () => (dispatch) => {
  Axios.get("/industries-list")
    .then((res) => {
      dispatch({
        type: SET_INDUSTRIES_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTimezoneList = () => (dispatch) => {
  Axios.get("/timezone_list")
    .then((res) => {
      dispatch({
        type: SET_TIMEZONE_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addEditClientInfo = (data, setOpen) => (dispatch) => {
  Axios.post("/edit-client-info", data, config)
    .then((res) => {
      if (res.data.status === true) {
        dispatch({
          type: SET_EDIT_CLIENT_INFO,
          payload: res.data,
        });
        setOpen(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const closeAccountReasonList = () => (dispatch) => {
  Axios.get("/close-account-reason-list")
    .then((res) => {
      dispatch({
        type: SET_CLOSE_ACCOUNT_REASON_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onCloseAccount = (data) => (dispatch) => {
  Axios.post("/close-account", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFreelancerDegreeList = () => (dispatch) => {
  Axios.get("/degree-list")
    .then((res) => {
      dispatch({
        type: SET_DEGREE_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onAddEducation = (data, popup) => (dispatch) => {
  Axios.post("/edit-education-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_EDIT_EDUCATION,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onDeleteEducation = (data) => (dispatch) => {
  Axios.post("/delete-education-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_DELETE_EDUCATION,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onEditContactInfo = (data, setEditAccount) => (dispatch) => {
  Axios.post("/edit-contact-info", data, config)
    .then((res) => {
      console.log(res);
      setEditAccount(false);
      dispatch({
        type: SET_EDIT_FREELANCER_INFO,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditLocationInfo = (data, setEditLocation) => (dispatch) => {
  Axios.post("/edit-location", data, config)
    .then((res) => {
      console.log(res);
      setEditLocation(false);
      dispatch({
        type: SET_EDIT_FREELANCER_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onEditVideo = (data, popup) => (dispatch) => {
  Axios.post("/edit-video", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_EDIT_VIDEO,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onEditDesignation = (data, popup) => (dispatch) => {
  Axios.post("/edit-designation-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_EDIT_DESIGNATION,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditPortfolio = (data, popup) => (dispatch) => {
  Axios.post("/edit-portfolio-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_EDIT_PORTFOLIO,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditLanguage = (data, popup) => (dispatch) => {
  Axios.post("/edit-language", data, config)
    .then((res) => {
      dispatch({
        type: SET_EDIT_LANGUAGE,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLanguageList = () => (dispatch) => {
  Axios.get("/languages-list")
    .then((res) => {
      dispatch({
        type: SET_LANGUAGE_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getHoursPerWeekList = () => (dispatch) => {
  Axios.get("/hours-per-week")
    .then((res) => {
      dispatch({
        type: SET_HWP_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditHourPerWeek = (data, popup) => (dispatch) => {
  Axios.post("/edit-hours-per-week", data, config)
    .then((res) => {
      dispatch({
        type: SET_HOURS_PER_WEEK,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditSkills = (data, popup) => (dispatch) => {
  Axios.post("/edit-skills-info", data, config)
    .then((res) => {
      dispatch({
        type: SET_EDIT_SKILLS,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditCertificate = (data, popup) => (dispatch) => {
  Axios.post("/edit-certificate-info", data, config)
    .then((res) => {
      dispatch({
        type: SET_EDIT_CERTIFICATE,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onDeleteCertificate = (data, popup) => (dispatch) => {
  Axios.post("/delete-certificate-info", data, config)
    .then((res) => {
      dispatch({
        type: SET_DELETE_CERTIFICATE,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const editNameInfo = (data) => (dispatch) => {
  Axios.post("/edit-name-info", data, config)
    .then((res) => {
      dispatch({
        type: SET_PROFILE_IMG_CHANGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };
  export const editVisiblity = (data, popup) => (dispatch) => {
    Axios.post("/set-visibility", data, config)
    .then((res) => {
      dispatch({
        type: SET_VISIBLITY,
        payload: res.data,
      });
      popup(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const editExprienceLev = (data, popup) => (dispatch) => {
  Axios.post("/edit-experience-level", data, config)
  .then((res) => {
    dispatch({
      type: SET_EXPRIENCE_LEVEL,
      payload: res.data,
      });
      popup(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

    export const onDeletePortfolio = (data) => (dispatch) => {
      Axios.post("/delete-portfolio-info", data, config)
        .then((res) => {
          dispatch({
            type: SET_DELETE_PORTFOLIO,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };