var subject = require('./subject.js')
var mock = require('mock-fs');
subject.inc(1,undefined);
subject.inc(1,"randomText");
subject.inc(-1,undefined);
subject.inc(-1,"randomText");
subject.inc(-1,"randomText");
subject.weird(8,1,43,"strict");
subject.weird(8,1,43,"randomText");
subject.weird(8,1,41,"strict");
subject.weird(8,1,41,"randomText");
subject.weird(8,-1,43,"strict");
subject.weird(8,-1,43,"randomText");
subject.weird(8,-1,41,"strict");
subject.weird(8,-1,41,"randomText");
subject.weird(6,1,43,"strict");
subject.weird(6,1,43,"randomText");
subject.weird(6,1,41,"strict");
subject.weird(6,1,41,"randomText");
subject.weird(6,-1,43,"strict");
subject.weird(6,-1,43,"randomText");
subject.weird(6,-1,41,"strict");
subject.weird(6,-1,41,"randomText");
subject.weird(6,-1,41,"randomText");
subject.fileTest('path/fileExists','pathContent/file1');
subject.fileTest('path/fileExists','pathContent/file2');
subject.fileTest('path/filePresent','pathContent/file1');
subject.fileTest('path/filePresent','pathContent/file2');
subject.fileTest('path/fileExists','pathContent/file1');
subject.fileTest('path/fileExists','pathContent/file2');
subject.fileTest('path/fileExists','pathContent/file1');
subject.fileTest('path/fileExists','pathContent/file2');
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/filePresent','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"pathContent":{"file1":"file"}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
mock({"path/fileExists":{},"path/filePresent":{" ":" "},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file2');
mock.restore();
subject.normalize('path/fileExists','pathContent/file2');
subject.normalize('751-091-3941','###-###-#### x###',{"normalize":true});
subject.normalize('(782) 890-4838 x1229','###-###-#### x####',{"shouldNormalize":true});
subject.normalize('1111111111','(NNN) NNN-NNNN','');
subject.normalize('2222222222','(NNN) NNN-NNNN',{"normalize": true});
subject.normalize('693-046-2206 x485','###-###-####','');
subject.format('(782) 890-4838 x1229','###-###-#### x####',{"shouldNormalize":true});
subject.format('(554) 195-2687 x5702','###.###.#### x#####',{"normalize":true});
subject.format('1-141-821-5559 x19983','1-###-###-####',{"shouldNormalize":true});
subject.format('1111111111','(NNN) NNN-NNNN','');
subject.format('2222222222','(NNN) NNN-NNNN',{"normalize": true});
subject.format('026.983.4192','###.###.#### x####','');
subject.blackListNumber('1-141-821-5559 x19983','1-###-###-####',{"shouldNormalize":true});
subject.blackListNumber('409.283.9016','1-###-###-####',{"normalize":true});
subject.blackListNumber('1-326-531-5883 x5541','###.###.####',{"shouldNormalize":true});
subject.blackListNumber('1111111111','(NNN) NNN-NNNN','');
subject.blackListNumber('2222222222','(NNN) NNN-NNNN',{"normalize": true});
subject.blackListNumber('(505) 438-5268 x563','###.###.####','');
subject.blackListNumber('2121111111');
