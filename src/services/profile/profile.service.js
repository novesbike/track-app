import api from "services/api";

function _processFile(avatar) {
  let uri = avatar.uri;
  let name = uri.split("/").pop();

  function getType(filename) {
    let match = /\.(\w+)$/.exec(filename);
    return match ? `image/${match[1]}` : `image`;
  }

  let type = getType(name);
  return { uri, name, type };
}

export const updateProfile = async ({ avatar, name, id }) => {
  const formData = new FormData();

  formData.append("username", name);

  if (avatar) formData.append("file", _processFile(avatar));

  return api
    .put(`v1/users/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
