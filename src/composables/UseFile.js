import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Capacitor } from "@capacitor/core";
import { ref } from "vue";


export default function useFile() {
  const photoPath = ref("");

  const takePhoto = async () => {
    const options = {
      resultType: CameraResultType.Uri,
    };

    const originalPhoto = await Camera.getPhoto(options);
    const photoInTempStorage = await Filesystem.readFile({
      path: originalPhoto.path,
    });

    let date = new Date(),
      time = date.getTime(),
      fileName = time + ".jpeg";

    await Filesystem.writeFile({
      data: photoInTempStorage.data,
      path: fileName,
      directory: FilesystemDirectory.Data,
    });

    const finalPhotoUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName,
    });

    photoPath.value = Capacitor.convertFileSrc(finalPhotoUri.uri);
  };

 

  return { takePhoto, photoPath, pickMedia };
}
