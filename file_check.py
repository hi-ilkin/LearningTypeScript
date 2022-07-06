import glob
import os
from threading import local


drive_files = {os.path.basename(f):f for f in glob.glob(r'D:\from_appricot\ilkin_personal\Senedler\**\*')}
local_files = {os.path.basename(f):f for f in glob.glob(r'E:\InternetExplorer\Senedler\**\*')}

print(f'Number of local files: {len(local_files)}')
print(f'Number of drive files: {len(drive_files)}')

print('DIFF')

for file in set(drive_files.keys()) - set(local_files.keys()):
    print(drive_files[file])