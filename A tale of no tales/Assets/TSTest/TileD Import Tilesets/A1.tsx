<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="A1" tilewidth="16" tileheight="16" tilecount="900" columns="10">
 <image source="../A1/A1_tileset_sheet.png" width="160" height="1440"/>
 <tile id="600">
  <objectgroup draworder="index" id="2">
   <object id="1" x="4.25" y="4.8125" width="12.0625" height="11.3125"/>
  </objectgroup>
 </tile>
 <tile id="601">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.63636" y="5.18182" width="20.8182" height="13.7273"/>
  </objectgroup>
 </tile>
 <tile id="602">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.54545" y="4.72727" width="12.6364" height="13.3636"/>
  </objectgroup>
 </tile>
 <tile id="607">
  <objectgroup draworder="index" id="2">
   <object id="1" x="6.09091" y="5.72727" width="2.18182" height="10.2727"/>
   <object id="2" x="3.81818" y="6.45455" width="12.9091" height="2.27273"/>
  </objectgroup>
 </tile>
 <tile id="609">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.636364" y="6.90909" width="11.7273" height="0.818182"/>
   <object id="2" x="5.81818" y="5.36364" width="3.18182" height="10.5455"/>
  </objectgroup>
 </tile>
 <tile id="610">
  <objectgroup draworder="index" id="3">
   <object id="2" x="6" y="-0.0625" width="10.0625" height="16.125"/>
  </objectgroup>
 </tile>
 <tile id="612">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.09091" y="-1.18182" width="11.2727" height="18.3636"/>
  </objectgroup>
 </tile>
 <tile id="620">
  <objectgroup draworder="index" id="2">
   <object id="1" x="6.4375" y="0.0625" width="9.3125" height="9.4375"/>
  </objectgroup>
 </tile>
 <tile id="621">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.818182" y="-1.27273" width="18.1818" height="11.3636"/>
  </objectgroup>
 </tile>
 <tile id="622">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.45455" y="-0.909091" width="11.2727" height="11.4545"/>
  </objectgroup>
 </tile>
 <tile id="627">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.454545" y="-1.18182" width="10.1818" height="17.9091"/>
   <object id="2" x="9" y="6.54545" width="8.90909" height="10"/>
  </objectgroup>
 </tile>
 <tile id="629">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.181818" y="6" width="16.2727" height="1.36364"/>
   <object id="2" x="6.81818" y="-0.181818" width="1.54545" height="6.09091"/>
  </objectgroup>
 </tile>
 <wangsets>
  <wangset name="Terrains" type="corner" tile="-1">
   <wangcolor name="Shallow Water" color="#ff0000" tile="0" probability="1"/>
   <wangcolor name="Shallow/Deep Transition" color="#00ff00" tile="183" probability="1"/>
   <wangcolor name="Deep Water" color="#0000ff" tile="361" probability="1"/>
   <wangcolor name="Beach" color="#ff7700" tile="483" probability="1"/>
   <wangcolor name="Grassy Pond" color="#00e9ff" tile="633" probability="1"/>
   <wangcolor name="Dirty Pond" color="#ff00d8" tile="783" probability="1"/>
   <wangtile tileid="0" wangid="0,0,0,1,0,0,0,0"/>
   <wangtile tileid="1" wangid="0,0,0,1,0,1,0,0"/>
   <wangtile tileid="2" wangid="0,0,0,0,0,1,0,0"/>
   <wangtile tileid="7" wangid="0,1,0,0,0,1,0,1"/>
   <wangtile tileid="9" wangid="0,1,0,1,0,0,0,1"/>
   <wangtile tileid="10" wangid="0,1,0,1,0,0,0,0"/>
   <wangtile tileid="11" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="12" wangid="0,0,0,0,0,1,0,1"/>
   <wangtile tileid="20" wangid="0,1,0,0,0,0,0,0"/>
   <wangtile tileid="21" wangid="0,1,0,0,0,0,0,1"/>
   <wangtile tileid="22" wangid="0,0,0,0,0,0,0,1"/>
   <wangtile tileid="27" wangid="0,0,0,1,0,1,0,1"/>
   <wangtile tileid="29" wangid="0,1,0,1,0,1,0,0"/>
   <wangtile tileid="150" wangid="0,0,0,2,0,0,0,0"/>
   <wangtile tileid="151" wangid="0,0,0,2,0,2,0,0"/>
   <wangtile tileid="152" wangid="0,0,0,0,0,2,0,0"/>
   <wangtile tileid="157" wangid="0,2,0,0,0,2,0,2"/>
   <wangtile tileid="159" wangid="0,2,0,2,0,0,0,2"/>
   <wangtile tileid="160" wangid="0,2,0,2,0,0,0,0"/>
   <wangtile tileid="161" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="162" wangid="0,0,0,0,0,2,0,2"/>
   <wangtile tileid="170" wangid="0,2,0,0,0,0,0,0"/>
   <wangtile tileid="171" wangid="0,2,0,0,0,0,0,2"/>
   <wangtile tileid="172" wangid="0,0,0,0,0,0,0,2"/>
   <wangtile tileid="177" wangid="0,0,0,2,0,2,0,2"/>
   <wangtile tileid="179" wangid="0,2,0,2,0,2,0,0"/>
   <wangtile tileid="192" wangid="0,0,0,2,0,0,0,2"/>
   <wangtile tileid="193" wangid="0,2,0,0,0,2,0,0"/>
   <wangtile tileid="300" wangid="0,0,0,3,0,0,0,0"/>
   <wangtile tileid="301" wangid="0,0,0,3,0,3,0,0"/>
   <wangtile tileid="302" wangid="0,0,0,0,0,3,0,0"/>
   <wangtile tileid="307" wangid="0,3,0,0,0,3,0,3"/>
   <wangtile tileid="309" wangid="0,3,0,3,0,0,0,3"/>
   <wangtile tileid="310" wangid="0,3,0,3,0,0,0,0"/>
   <wangtile tileid="311" wangid="0,3,0,3,0,3,0,3"/>
   <wangtile tileid="312" wangid="0,0,0,0,0,3,0,3"/>
   <wangtile tileid="320" wangid="0,3,0,0,0,0,0,0"/>
   <wangtile tileid="321" wangid="0,3,0,0,0,0,0,3"/>
   <wangtile tileid="322" wangid="0,0,0,0,0,0,0,3"/>
   <wangtile tileid="327" wangid="0,0,0,3,0,3,0,3"/>
   <wangtile tileid="329" wangid="0,3,0,3,0,3,0,0"/>
   <wangtile tileid="450" wangid="0,0,0,4,0,0,0,0"/>
   <wangtile tileid="451" wangid="0,0,0,4,0,4,0,0"/>
   <wangtile tileid="452" wangid="0,0,0,0,0,4,0,0"/>
   <wangtile tileid="457" wangid="0,4,0,0,0,4,0,4"/>
   <wangtile tileid="459" wangid="0,4,0,4,0,0,0,4"/>
   <wangtile tileid="460" wangid="0,4,0,4,0,0,0,0"/>
   <wangtile tileid="461" wangid="0,4,0,4,0,4,0,4"/>
   <wangtile tileid="462" wangid="0,0,0,0,0,4,0,4"/>
   <wangtile tileid="470" wangid="0,4,0,0,0,0,0,0"/>
   <wangtile tileid="471" wangid="0,4,0,0,0,0,0,4"/>
   <wangtile tileid="472" wangid="0,0,0,0,0,0,0,4"/>
   <wangtile tileid="477" wangid="0,0,0,4,0,4,0,4"/>
   <wangtile tileid="479" wangid="0,4,0,4,0,4,0,0"/>
   <wangtile tileid="492" wangid="0,0,0,4,0,0,0,4"/>
   <wangtile tileid="493" wangid="0,4,0,0,0,4,0,0"/>
   <wangtile tileid="600" wangid="0,0,0,5,0,0,0,0"/>
   <wangtile tileid="601" wangid="0,0,0,5,0,5,0,0"/>
   <wangtile tileid="602" wangid="0,0,0,0,0,5,0,0"/>
   <wangtile tileid="607" wangid="0,5,0,0,0,5,0,5"/>
   <wangtile tileid="609" wangid="0,5,0,5,0,0,0,5"/>
   <wangtile tileid="610" wangid="0,5,0,5,0,0,0,0"/>
   <wangtile tileid="611" wangid="0,5,0,5,0,5,0,5"/>
   <wangtile tileid="612" wangid="0,0,0,0,0,5,0,5"/>
   <wangtile tileid="620" wangid="0,5,0,0,0,0,0,0"/>
   <wangtile tileid="621" wangid="0,5,0,0,0,0,0,5"/>
   <wangtile tileid="622" wangid="0,0,0,0,0,0,0,5"/>
   <wangtile tileid="627" wangid="0,0,0,5,0,5,0,5"/>
   <wangtile tileid="629" wangid="0,5,0,5,0,5,0,0"/>
   <wangtile tileid="642" wangid="0,0,0,5,0,0,0,5"/>
   <wangtile tileid="643" wangid="0,5,0,0,0,5,0,0"/>
   <wangtile tileid="750" wangid="0,0,0,6,0,0,0,0"/>
   <wangtile tileid="751" wangid="0,0,0,6,0,6,0,0"/>
   <wangtile tileid="752" wangid="0,0,0,0,0,6,0,0"/>
   <wangtile tileid="757" wangid="0,6,0,0,0,6,0,6"/>
   <wangtile tileid="759" wangid="0,6,0,6,0,0,0,6"/>
   <wangtile tileid="760" wangid="0,6,0,6,0,0,0,0"/>
   <wangtile tileid="761" wangid="0,6,0,6,0,6,0,6"/>
   <wangtile tileid="762" wangid="0,0,0,0,0,6,0,6"/>
   <wangtile tileid="770" wangid="0,6,0,0,0,0,0,0"/>
   <wangtile tileid="771" wangid="0,6,0,0,0,0,0,6"/>
   <wangtile tileid="772" wangid="0,0,0,0,0,0,0,6"/>
   <wangtile tileid="777" wangid="0,0,0,6,0,6,0,6"/>
   <wangtile tileid="779" wangid="0,6,0,6,0,6,0,0"/>
   <wangtile tileid="792" wangid="0,0,0,6,0,0,0,6"/>
   <wangtile tileid="793" wangid="0,6,0,0,0,6,0,0"/>
  </wangset>
 </wangsets>
</tileset>
