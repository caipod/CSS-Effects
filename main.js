var resratio = (screen.width/screen.height);
if (resratio >= 1.6) {var widescreen_string = "Widescreen";}
else {var widescreen_string = "Not A Widescreen";}
if (1.32 < resratio && resratio < 1.34) {var aspect_ratio_string = "4:3";}
else if (1.77 < resratio && resratio < 1.79) {var aspect_ratio_string = "16:9";}
else if (1.59 < resratio && resratio < 1.61) {var aspect_ratio_string = "16:10";}
else {var aspect_ratio_string = resratio.toFixed(2) + ":1";}