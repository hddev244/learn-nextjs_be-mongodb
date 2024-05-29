// ckeditor 5 custom upload adapter with typescript

export default class CustomUploadAdapter {
    loader: any;
    constructor(loader: any) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then((file: any) => {
            const data = new FormData();
            data.append("file", file);

            return new Promise((resolve, reject) => {
                fetch("/api/images", {
                    method: "POST",
                    body: data,
                })
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.status === 200) {
                            resolve({
                                default: res.body,
                            });
                        } else {
                            reject(res.body);
                        }
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        });
    }
}