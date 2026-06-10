import os
from PIL import Image

dir_path = r"c:\Users\santi\Desktop\codigo\landing-addinvoices\frontend\public\mockups-addinvoices"
for filename in os.listdir(dir_path):
    if filename.endswith(".png"):
        img_path = os.path.join(dir_path, filename)
        try:
            with Image.open(img_path) as img:
                has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
                is_transparent = False
                if has_alpha:
                    alpha = img.getchannel('A')
                    if alpha.getextrema()[0] < 255:
                        is_transparent = True
                
                if not is_transparent:
                    print(f"{filename} - NO_TRANSPARENCY_CHANNEL")
                else:
                    corners = [(0,0), (img.width-1, 0), (0, img.height-1), (img.width-1, img.height-1)]
                    white_corners = 0
                    rgba_img = img.convert("RGBA")
                    for x, y in corners:
                        r, g, b, a = rgba_img.getpixel((x,y))
                        if a > 250 and r > 240 and g > 240 and b > 240:
                            white_corners += 1
                    
                    if white_corners >= 3:
                        print(f"{filename} - WHITE_CORNERS")
                    else:
                        print(f"{filename} - TRANSPARENT")
        except Exception as e:
            print(f"{filename} - Error {e}")
