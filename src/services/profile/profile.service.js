import api from "services/api";

function _processFile(avatar) {
  let uri = avatar.uri;
  let name = uri.split("/").pop();

  function getType(filename) {
    let match = /\.(\w+)$/.exec(filename);
    return match ? `image/${match[1]}` : `image`;
  }

  let type = getType(name);
  return { ...avatar, uri, name, type };
}

export const updateProfile = async ({ avatar, name }) => {
  let response = await api.put("auth/user", { name });

  if (avatar) {
    response = await updateAvatar(avatar);
  }

  return response.data;
};

export const updateAvatar = async (avatar) => {
  const formData = new FormData();
  formData.append("avatar", _processFile(avatar));

  return await api.post("auth/user/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePassword = async (form) => {
  let response = await api.put("auth/password", form);
  return response.data;
};
