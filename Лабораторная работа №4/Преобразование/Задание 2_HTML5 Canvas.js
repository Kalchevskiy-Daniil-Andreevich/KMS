(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание 2_HTML5 Canvas_atlas_1", frames: [[0,110,228,39],[0,151,204,39],[0,192,204,39],[0,0,249,108]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Задание 2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Задание 2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Задание 2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Задание 2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Теложука = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABHjzQAIADAGAEQAlAUAAAcQAAAcglATQgiATgwABIACAAQBEADAxBIQAzBKAABqQAABqgzBLQgyBLhIAAQhHAAgzhLQgyhLAAhqQAAhqAyhKQAyhJBFgCQg0AAgkgUQglgTAAgcQAAgcAlgUQAFgDAGgDABHjzIBGiSAimmFIBWCTQAhgOAsAAQAqAAAgANAADh5IgGAA");
	this.shape.setTransform(-1.25,-0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah6D5QgyhLAAhqQAAhqAyhKQAyhKBFgCIAGAAIgGAAQgzAAglgUQglgTAAgcQAAgcAlgUIAMgFQAggOAsgBQAqABAgANIAOAGQAkAUAAAcQAAAcgkATQgjATgvABIABAAQBFADAxBJQAzBKAABqQAABqgzBLQgzBKhHAAQhGAAg0hKg");
	this.shape_1.setTransform(-1.25,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-40.7,36.6,80.1);


(lib.Лапажука2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhIjRIB5CgIAYED");
	this.shape.setTransform(18.575,-1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhOjQIB5CgIAkEB");
	this.shape_1.setTransform(19.175,-1.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhUjQIB6CgIAvEB");
	this.shape_2.setTransform(19.75,-1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhLjPIB6CgIAdD/");
	this.shape_3.setTransform(18.8,-1.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhBjPIB5CgIAKD/");
	this.shape_4.setTransform(17.875,-1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Ag8jOIB5CgIgJD9");
	this.shape_5.setTransform(17.375,-1.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Ag8jOIB5CgIgbD9");
	this.shape_6.setTransform(17.375,-1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Ag8jNIB5CgIguD7");
	this.shape_7.setTransform(17.375,-1.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Ag8jNIB5CgIgcD7");
	this.shape_8.setTransform(17.375,-1.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Ag8jMIB5CgIgLD5");
	this.shape_9.setTransform(17.375,-1.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AhAjMIB6CgIAHD5");
	this.shape_10.setTransform(17.725,-1.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AhJjLIB6CgIAYD3");
	this.shape_11.setTransform(18.6,-1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AhSjLIB6ChIArD2");
	this.shape_12.setTransform(19.5,-1.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AhKjKIB5CgIAcD1");
	this.shape_13.setTransform(18.775,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-23.3,29.3,43.900000000000006);


(lib.Лапажука = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTDUIAmkGICBih");
	this.shape.setTransform(-70.375,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s().p("AAAgYIAAAxg");
	this.shape_1.setTransform(0,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhmDVIBNkJICBig");
	this.shape_2.setTransform(-72.3,-21.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhYDUIAwkHICBig");
	this.shape_3.setTransform(-70.875,-21.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhKDSIAUkDICBig");
	this.shape_4.setTransform(-69.425,-21.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Ag3DRIgJkBICBig");
	this.shape_5.setTransform(-68.45,-22.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgaDQIgmj+ICBih");
	this.shape_6.setTransform(-68.45,-22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AACDOIhCj7ICBig");
	this.shape_7.setTransform(-68.45,-22.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgbDPIglj9ICBig");
	this.shape_8.setTransform(-68.45,-22.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Ag3DQIgJj/ICBig");
	this.shape_9.setTransform(-68.45,-22.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AhKDRIAUkBICBig");
	this.shape_10.setTransform(-69.45,-22.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AhYDSIAxkDICBig");
	this.shape_11.setTransform(-70.9,-21.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AhnDTIBOkEICBih");
	this.shape_12.setTransform(-72.35,-21.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AhUDRIAokAICBih");
	this.shape_13.setTransform(-70.5,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.7,-43.9,84.7,49.9);


(lib.Кнопка3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-57.1,28.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-61.75,14.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,14.5,124.5,54);


(lib.Кнопка2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-51.1,38.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-61.75,24.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,24.7,124.5,54);


(lib.Кнопка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-49.8,48.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-60.45,34.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,34.6,124.5,53.99999999999999);


(lib.Жукслапами = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Лапажука2("synched",2);
	this.instance.setTransform(64.65,27.35,1,1,-13.4544,0,0,27.9,20.9);

	this.instance_1 = new lib.Лапажука2("synched",4);
	this.instance_1.setTransform(56.65,41.7,1,1,0,0,0,28.2,19.4);

	this.instance_2 = new lib.Лапажука2("synched",6);
	this.instance_2.setTransform(48.65,56.3,1,1,0,0,0,23.5,19.7);

	this.instance_3 = new lib.Лапажука("synched",2);
	this.instance_3.setTransform(-19.95,22.9,1,1,14.9983,0,0,-78.7,-2.1);

	this.instance_4 = new lib.Лапажука("synched",4);
	this.instance_4.setTransform(-15.65,42.55,1,1,0,0,0,-82.7,-0.4);

	this.instance_5 = new lib.Лапажука("synched",6);
	this.instance_5.setTransform(-6.55,56.35,1,1,0,0,0,-76.9,-0.9);

	this.instance_6 = new lib.Теложука("synched",0);
	this.instance_6.setTransform(22.45,-14.1,1,1,0,0,0,-1.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:6}},{t:this.instance_4,p:{startPosition:4}},{t:this.instance_3,p:{startPosition:2}},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_1,p:{regX:28.2,regY:19.4,x:56.65,y:41.7,startPosition:4}},{t:this.instance,p:{regX:27.9,regY:20.9,x:64.65,y:27.35,startPosition:2}}]}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:15}},{t:this.instance_4,p:{startPosition:13}},{t:this.instance_3,p:{startPosition:11}},{t:this.instance_2,p:{startPosition:15}},{t:this.instance_1,p:{regX:23.5,regY:19.7,x:51.95,y:42,startPosition:13}},{t:this.instance,p:{regX:23.5,regY:19.7,x:60.1,y:27.2,startPosition:11}}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-54.1,90.9,111.5);


// stage content:
(lib.Задание2_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.streamSoundSymbolsList[0] = [{id:"жукonlineaudioconvertercom",startFrame:0,endFrame:63,loop:1,offset:0},{id:"жук2v2onlineaudioconvertercom",startFrame:0,endFrame:63,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("жук2v2onlineaudioconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,0,63,1);
		var soundInstance = playSound("жукonlineaudioconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,0,63,1);
		this.stop();
		this.ButtonStart.addEventListener("click",f1.bind(this));
		function f1(args){this.play();}
		this.ButtonStop.addEventListener("click",f2.bind(this));
		function f2(args) {this.stop();}
		this.ButtonReturn.addEventListener("click",f3.bind(this));
		function f3(args) {this.gotoAndStop(0);}
		/* import flash.events.MouseEvent;
		
		stop();
		
		ButtonStart.addEventListener(MouseEvent.CLICK,f1);
		function f1(event:MouseEvent):void 
		{play();}
		
		ButtonStop.addEventListener(MouseEvent.CLICK,f2);
		function f2(event:MouseEvent):void
		{stop();}
		
		ButtonReturn.addEventListener(MouseEvent.CLICK,f3);
		function f3(event:MouseEvent):void
		{gotoAndStop(0);}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64));

	// Кнопки
	this.ButtonReturn = new lib.Кнопка3();
	this.ButtonReturn.name = "ButtonReturn";
	this.ButtonReturn.setTransform(556.95,650.55,1,1,0,0,0,0.5,41.5);
	new cjs.ButtonHelper(this.ButtonReturn, 0, 1, 1);

	this.ButtonStop = new lib.Кнопка2();
	this.ButtonStop.name = "ButtonStop";
	this.ButtonStop.setTransform(427.1,650.55,1,1,0,0,0,0.5,51.7);
	new cjs.ButtonHelper(this.ButtonStop, 0, 1, 1);

	this.ButtonStart = new lib.Кнопка();
	this.ButtonStart.name = "ButtonStart";
	this.ButtonStart.setTransform(295.75,650.55,1,1,0,0,0,1.8,61.6);
	new cjs.ButtonHelper(this.ButtonStart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ButtonStart,p:{mode:"independent",startPosition:undefined}},{t:this.ButtonStop,p:{mode:"independent",startPosition:undefined}},{t:this.ButtonReturn,p:{mode:"independent",startPosition:undefined}}]}).to({state:[{t:this.ButtonStart,p:{mode:"synched",startPosition:0}},{t:this.ButtonStop,p:{mode:"synched",startPosition:0}},{t:this.ButtonReturn,p:{mode:"synched",startPosition:0}}]},63).wait(1));

	// Жук2
	this.instance = new lib.Жукслапами();
	this.instance.setTransform(1257.5,608.8,0.57,0.6062,-30.0005,0,0,20.2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.6061,rotation:-43.423,guide:{path:[1257.5,608.8,1243.4,567.5,1181.3,535.7,1128.7,508.8,1043.4,489.7,1029.9,486.6,1008.6,486.6,982.7,487.1,968.3,487.2,950.8,487.3,939.4,486.2,922.6,484.5,908.1,479.7,872.3,467.6,856.3,459.5,835.4,448.9,816.7,430.9,813.1,425.5,808.7,420], orient:'fixed'}},25).to({regX:20.1,regY:2.1,scaleX:0.5716,scaleY:0.6062,rotation:0,skewX:132.8221,skewY:131.3406,guide:{path:[808.6,419.9,798,406.6,783,392.8], orient:'fixed'}},7).to({regX:20.2,scaleX:0.57,scaleY:0.6061,rotation:-44.998,skewX:0,skewY:0,guide:{path:[783.1,392.9,782.8,392.6,782.5,392.3,768.1,379.2,740.9,358.4,710.1,334.9,699.3,325.7,677.4,307.1,665,290.6,650.2,270.4,643.7,261.8,632.9,247.4,625.3,239.4,606.3,219.3,582.5,214.2,557.4,208.1,533.8,202.9,487.3,192.9,470.9,192.9,462.4,192.9,442.4,196.1,422.4,199.1,411.4,199.1,391.8,199.1,355.8,192.3,315,183.8,298.2,180.4,250,170.6,225.2,163.6,182.6,151.7,166.7,139,155,129.6,130.1,110.2,108.3,93.1,91.5,80.3,83.2,73.9,76.7,64.4,74.1,60.6,66.3,46.8,60,35.7,54.4,29.1,49.7,23.4,43.7,18.7], orient:'fixed'}},31).wait(1));

	// ОстальныеЖуки
	this.instance_1 = new lib.Жукслапами();
	this.instance_1.setTransform(1149.1,305.85,0.9727,0.5377,74.9995,0,0,20.3,1.9);

	this.instance_2 = new lib.Жукслапами();
	this.instance_2.setTransform(595.25,88.85,0.58,0.6743,59.9991,0,0,20.2,2);

	this.instance_3 = new lib.Жукслапами();
	this.instance_3.setTransform(769.05,580.65,0.6728,0.7584,45,0,0,20.2,1.9);

	this.instance_4 = new lib.Жукслапами();
	this.instance_4.setTransform(133.7,311.5,1.0864,0.7534,15.0003,0,0,20.2,2);

	this.instance_5 = new lib.Жукслапами();
	this.instance_5.setTransform(921.15,71.7,0.7002,0.7781,45.0008,0,0,20.4,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},63).wait(1));

	// Жук1
	this.instance_6 = new lib.Жукслапами();
	this.instance_6.setTransform(58.9,607.85,1,1,45,0,0,20.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.9999,scaleY:0.9999,rotation:70.2173,guide:{path:[58.9,607.8,109.7,579.5,168,541.5,196.2,523.1,208.8,514.9,230,501.3,244.8,492.9,281.7,472,315.4,463,352.7,453.1,402.9,452.8,404.3,452.8,405.7,452.8,404.7,452.8,403.4,453.8,403.2,454,403.1,453.8,402.9,453.5,402.9,452.8,402.9,451.9,410.7,452.1,418.5,452.3,434.1,453.6,471.8,456.8,475.8,456.8,501.2,457.3,526.5,457.8,541.7,458.1,549.3,457.8,556.8,457.6,556.8,456.8,556.8,456.1,554.8,455.9,552.8,455.6,548.8,455.9,540.3,456.8,538.9,456.8,548.6,456.8,556.8,456.8,596.1,456.8,601,456.7,622,456.1,642,452.4,657.3,449.6,705,438.3,760,425.3,806.1,414.8], orient:'fixed'}},25).to({regY:2,scaleX:1,scaleY:1,rotation:59.9992,guide:{path:[806.1,414.9,819.9,411.8,832.8,408.9,842.2,406.8,855.1,399.4,862.2,395.4,874.8,387.9,885.2,382.6,897.1,375.7,911.7,367.1,915.8,364.9,933.6,355.3,956.9,337.6,969.7,327.8,990.8,310.9,1027.8,282.9,1058.9,249.5,1096.7,208.8,1112.8,173,1122.5,151.4,1132.9,141.7,1146.7,128.8,1168.8,128,1186.5,127.3,1212.8,127.1,1224.1,127,1255.4,127], orient:'fixed'}},38).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640.8,347.2,672.8,330.3);
// library properties:
lib.properties = {
	id: '8E9FEDB6CF39A941A046C2D3A5BED611',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Задание 2_HTML5 Canvas_atlas_1.png?1678532619315", id:"Задание 2_HTML5 Canvas_atlas_1"},
		{src:"sounds/жукonlineaudioconvertercom.mp3?1678532619340", id:"жукonlineaudioconvertercom"},
		{src:"sounds/жук2v2onlineaudioconvertercom.mp3?1678532619340", id:"жук2v2onlineaudioconvertercom"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8E9FEDB6CF39A941A046C2D3A5BED611'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;