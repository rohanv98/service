import { Component, OnInit } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  imageChangedEvent: any ='';
  croppedImage: any = '';
  fileupload : any;
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      console.log(this.imageChangedEvent)
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    const fileBeforeCrop = this.imageChangedEvent.target.files[0];
    console.log(fileBeforeCrop);
    // this.fileupload = new File( fileBites: [event.file], fileBeforeCrop.name, options:{type: fileBeforeCrop.type});

    let block = this.croppedImage.split(";");
    console.log(block);
    let final = block[0].split(":")
    console.log(final);
    // let final1 = final[1].split(":");
    // console.log(final1.split("."));
// // Get the content type of the image
// let contentType = block[0].split(":")[1];// In this case "image/gif"
// // get the real base64 content of the file
// let realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
// console.log(realData);

// Convert it to a blob to upload
// let blob = b64toBlob(realData, contentType);
      console.log(this.croppedImage);
    console.log(fileBeforeCrop);

  }
  imageLoaded() {
      // show cropper
      console.log("imgload")
  }
  cropperReady(event) {
      // cropper ready
      console.log("cropready")

  }
  loadImageFailed() {
      // show message
      console.log("loadfailed")

  }
  
  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
}

rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
}

private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
        ...this.transform,
        flipH: flippedV,
        flipV: flippedH
    };
}


flipHorizontal() {
    this.transform = {
        ...this.transform,
        flipH: !this.transform.flipH
    };
}

flipVertical() {
    this.transform = {
        ...this.transform,
        flipV: !this.transform.flipV
    };
}

resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
}

zoomOut() {
    this.scale -= .1;
    this.transform = {
        ...this.transform,
        scale: this.scale
    };
}

zoomIn() {
    this.scale += .1;
    this.transform = {
        ...this.transform,
        scale: this.scale
    };
}

toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
}

updateRotation() {
    this.transform = {
        ...this.transform,
        rotate: this.rotation
    };
}

}
