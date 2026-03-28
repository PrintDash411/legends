const CACHE_NAME = 'ojt-v1';
// Add the names of your images to the list below
const ASSETS = [
  './',
  './index.html',
  './manifest.json',

  './images/PressureGauge_Setup.png' 
  './images/NipplePipe_TeeConector.pngg' 
  './images/IsolationValve.png' 
  './images/TeflonTape.png' 
  './images/Wrench17in.png' 
  './images/PressureGauge_Setup.png' 
  './images/Ubent.png' 
  './images/ElbowdeUno.png' 
  './images/NipplePipe.png' 
  './images/NipplewBallValve.png' 
  './images/Metro1.png' 
  './images/11.8inNipplePipe.png' 
  './images/FitterSetup.png' 
  './images/TubeBender.png' 
  './images/TubeCutter.png' 
  './images/Ruler.png' 
  './images/CopperTube.png' 
  './images/Ferrule.png' 
  './images/Wrench14in.png' 
  './images/Marker.png' 
  './images/TemperatureTransmitterSetup.png.jpg' 
  './images/TempCalibrator.jpg' 
  './images/Multimeter1.jpg' 
  './images/PowerSupply1.png' 
  './images/PhillipsScrewdriver.png' 
  './images/250ohmResistor.png' 
  './images/Gloves1.jpg' 
  './images/Probes1.jpg' 
  './images/Calculator1.jpg' 
  './images/HartCommunicator1.png' 
  './images/PressureTransmitterSetup.png' 
  './images/PneumaticHose.png' 
  './images/HartCommunicator2.png' 
  './images/HartCableCommunicator.png' 
  './images/WireStripper1.png' 
  './images/AdjustableWrench.png' 
  './images/Regulator.png' 
  './images/PrecisionandScrewdriver.png' 
  './images/PressureCalibrator.png' 
  './images/MultiTester.png' 
  './images/250ohmResistor2.png' 
  './images/TeeConnector.png' 
  './images/ElectricalSetup.png' 
  './images/InsulationTester.png' 
  './images/Shrinkable.png' 
  './images/HydraulicCrimper.png' 
  './images/CableGlands.png' 
  './images/SteelSaw.png' 
  './images/Wirestripper2.png' 
  './images/Cutter.png' 
  './images/images/SideCutter.png'
   './images/Lugs.png'
   './images/6LeadsTerminal.png'
   './images/StrandedWire.png'
   './images/Cable600V.png'

  './set2/page1_row1.png'
  './set2/Drill.png'
  './set2/HallowWallAnchor.png'
  './set2/SetOfDrillBit.png'
  './set2/BubbleLevel.png'
  './set2/Hammer.png'

  './set2/page3_row1.png'
  './set2/CrosscutSaw.png'
  './set2/Fittings.png'
  './set2/WD-40.png'
  './set2/PowerSupply.png'
  './set2/Calculator.png'

  './set2/page5_row1.png'
  './set2/SpareWires.png'
  './set2/ImmersionHeater.png'
  './set2/RTDSensor.png'
  './set2/VernierCaliper.png'
  './set2/ExtensionWire.png'
  './set2/IPConverter.png'
  './set2/Extension.png'
  './set2/RotorkCMR.png'
  './set2/PowerSupply(2).png'
  './set2/HoneywellTransmitter.png'
  './set2/TBMSeriesBI-MetalThermometer.png'

   './set2/Cable.jpg'
   './set2/Terminal Lug Crimper.jpg'
   './set2/Start Stop Switch (Cable Dressing Test).jpg'
   './set2/Digital Multimeter.jpg'
   './set2/Copper Tube.jpg'
   './set2/Terminal Lugs 7pcs.jpg'
   './set2/Start Stop Switch (Cable Dressing Test Cable).jpg'
   './set2/WinsPEAK VC60B INSULATION TESTER.jpg'
   './set2/Motor Control Test.jpg'
  
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
