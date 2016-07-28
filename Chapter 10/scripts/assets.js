require('shelljs/global');
rm('-rf','public/assets');
mkdir('-p','public/assets');
cp('-R', 'assets/', 'public/assets');

