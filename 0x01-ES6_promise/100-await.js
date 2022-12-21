import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const user = await createUser();
  const photo = await uploadPhoto();
  if (user && photo) {
    return { photo, user };
  }
  return { photo: null, user: null };
}
