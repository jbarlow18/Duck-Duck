gdjs.Level_322Code = {};
gdjs.Level_322Code.GDDuckObjects2_1final = [];

gdjs.Level_322Code.GDDuckObjects3_1final = [];

gdjs.Level_322Code.GDSpikeObjects2_1final = [];

gdjs.Level_322Code.GDDuckObjects1= [];
gdjs.Level_322Code.GDDuckObjects2= [];
gdjs.Level_322Code.GDDuckObjects3= [];
gdjs.Level_322Code.GDDuckObjects4= [];
gdjs.Level_322Code.GDBlockObjects1= [];
gdjs.Level_322Code.GDBlockObjects2= [];
gdjs.Level_322Code.GDBlockObjects3= [];
gdjs.Level_322Code.GDBlockObjects4= [];
gdjs.Level_322Code.GDKeyObjects1= [];
gdjs.Level_322Code.GDKeyObjects2= [];
gdjs.Level_322Code.GDKeyObjects3= [];
gdjs.Level_322Code.GDKeyObjects4= [];
gdjs.Level_322Code.GDDoorObjects1= [];
gdjs.Level_322Code.GDDoorObjects2= [];
gdjs.Level_322Code.GDDoorObjects3= [];
gdjs.Level_322Code.GDDoorObjects4= [];
gdjs.Level_322Code.GDSpikeObjects1= [];
gdjs.Level_322Code.GDSpikeObjects2= [];
gdjs.Level_322Code.GDSpikeObjects3= [];
gdjs.Level_322Code.GDSpikeObjects4= [];
gdjs.Level_322Code.GDDuckArtworkObjects1= [];
gdjs.Level_322Code.GDDuckArtworkObjects2= [];
gdjs.Level_322Code.GDDuckArtworkObjects3= [];
gdjs.Level_322Code.GDDuckArtworkObjects4= [];
gdjs.Level_322Code.GDLevelObjects1= [];
gdjs.Level_322Code.GDLevelObjects2= [];
gdjs.Level_322Code.GDLevelObjects3= [];
gdjs.Level_322Code.GDLevelObjects4= [];
gdjs.Level_322Code.GDSparkleParticleObjects1= [];
gdjs.Level_322Code.GDSparkleParticleObjects2= [];
gdjs.Level_322Code.GDSparkleParticleObjects3= [];
gdjs.Level_322Code.GDSparkleParticleObjects4= [];
gdjs.Level_322Code.GDCloudsObjects1= [];
gdjs.Level_322Code.GDCloudsObjects2= [];
gdjs.Level_322Code.GDCloudsObjects3= [];
gdjs.Level_322Code.GDCloudsObjects4= [];
gdjs.Level_322Code.GDDownButtonObjects1= [];
gdjs.Level_322Code.GDDownButtonObjects2= [];
gdjs.Level_322Code.GDDownButtonObjects3= [];
gdjs.Level_322Code.GDDownButtonObjects4= [];
gdjs.Level_322Code.GDCheeseObjects1= [];
gdjs.Level_322Code.GDCheeseObjects2= [];
gdjs.Level_322Code.GDCheeseObjects3= [];
gdjs.Level_322Code.GDCheeseObjects4= [];
gdjs.Level_322Code.GDJumpsObjects1= [];
gdjs.Level_322Code.GDJumpsObjects2= [];
gdjs.Level_322Code.GDJumpsObjects3= [];
gdjs.Level_322Code.GDJumpsObjects4= [];
gdjs.Level_322Code.GDChainObjects1= [];
gdjs.Level_322Code.GDChainObjects2= [];
gdjs.Level_322Code.GDChainObjects3= [];
gdjs.Level_322Code.GDChainObjects4= [];

gdjs.Level_322Code.conditionTrue_0 = {val:false};
gdjs.Level_322Code.condition0IsTrue_0 = {val:false};
gdjs.Level_322Code.condition1IsTrue_0 = {val:false};
gdjs.Level_322Code.condition2IsTrue_0 = {val:false};
gdjs.Level_322Code.condition3IsTrue_0 = {val:false};
gdjs.Level_322Code.conditionTrue_1 = {val:false};
gdjs.Level_322Code.condition0IsTrue_1 = {val:false};
gdjs.Level_322Code.condition1IsTrue_1 = {val:false};
gdjs.Level_322Code.condition2IsTrue_1 = {val:false};
gdjs.Level_322Code.condition3IsTrue_1 = {val:false};


gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
gdjs.Level_322Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDDuckObjects3[k] = gdjs.Level_322Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects3.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDDuckObjects3[k] = gdjs.Level_322Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects3.length = k;}if ( gdjs.Level_322Code.condition1IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition2IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10158940);
}
}}
}
if (gdjs.Level_322Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDDuckObjects3[k] = gdjs.Level_322Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects3.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10159900);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setAnimationName("Idle");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_322Code.GDDownButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setPosition((( gdjs.Level_322Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDDuckObjects3[0].getPointX("")),(( gdjs.Level_322Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDDuckObjects3[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects3[i].setPosition((( gdjs.Level_322Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDDuckObjects3[0].getPointX("")) - 32,(( gdjs.Level_322Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDDuckObjects3[0].getPointY("")) - 150);
}
}}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


};gdjs.Level_322Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
gdjs.Level_322Code.condition2IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level_322Code.condition2IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10171916);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDDuckObjects3 */
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(1);
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setHeight(55);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setWidth(70);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween("Squash Jump", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween("Stretch Jump", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_322Code.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].setHeight(30);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setHeight(30);
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}gdjs.Level_322Code.conditionTrue_1.val = !gdjs.Level_322Code.condition0IsTrue_1.val;
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setGravity(1500);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.Level_322Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_322Code.condition1IsTrue_1.val = true;
        gdjs.Level_322Code.GDDuckObjects3[k] = gdjs.Level_322Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects3.length = k;}}
gdjs.Level_322Code.conditionTrue_1.val = true && gdjs.Level_322Code.condition0IsTrue_1.val && gdjs.Level_322Code.condition1IsTrue_1.val;
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDDuckObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setGravity(250);
}
}}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_322Code.GDDuckObjects3.length = 0;


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.GDDuckObjects3_1final.length = 0;gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects4);
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        gdjs.Level_322Code.condition0IsTrue_1.val = true;
        gdjs.Level_322Code.GDDuckObjects4[k] = gdjs.Level_322Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects4.length = k;if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDDuckObjects4.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDDuckObjects3_1final.indexOf(gdjs.Level_322Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_322Code.GDDuckObjects3_1final.push(gdjs.Level_322Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects4);
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_322Code.condition1IsTrue_1.val = true;
        gdjs.Level_322Code.GDDuckObjects4[k] = gdjs.Level_322Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects4.length = k;if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDDuckObjects4.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDDuckObjects3_1final.indexOf(gdjs.Level_322Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_322Code.GDDuckObjects3_1final.push(gdjs.Level_322Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_322Code.GDDuckObjects3_1final, gdjs.Level_322Code.GDDuckObjects3);
}
}
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Level_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10174796);
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects3Objects = Hashtable.newFrom({"Duck": gdjs.Level_322Code.GDDuckObjects3});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSpikeObjects3Objects = Hashtable.newFrom({"Spike": gdjs.Level_322Code.GDSpikeObjects3});
gdjs.Level_322Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.Level_322Code.GDDuckObjects2.length = 0;

gdjs.Level_322Code.GDSpikeObjects2.length = 0;


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.GDDuckObjects2_1final.length = 0;gdjs.Level_322Code.GDSpikeObjects2_1final.length = 0;gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_322Code.GDSpikeObjects3);
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects3Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSpikeObjects3Objects, false, runtimeScene, false);
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDDuckObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDDuckObjects2_1final.indexOf(gdjs.Level_322Code.GDDuckObjects3[j]) === -1 )
            gdjs.Level_322Code.GDDuckObjects2_1final.push(gdjs.Level_322Code.GDDuckObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Level_322Code.GDSpikeObjects3.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDSpikeObjects2_1final.indexOf(gdjs.Level_322Code.GDSpikeObjects3[j]) === -1 )
            gdjs.Level_322Code.GDSpikeObjects2_1final.push(gdjs.Level_322Code.GDSpikeObjects3[j]);
    }
}
}
{
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Level_322Code.GDDuckObjects2_1final, gdjs.Level_322Code.GDDuckObjects2);
gdjs.copyArray(gdjs.Level_322Code.GDSpikeObjects2_1final, gdjs.Level_322Code.GDSpikeObjects2);
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Quack.mp3", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_322Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDDuckObjects2[k] = gdjs.Level_322Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects2.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10178140);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects2[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects2[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween("Stretch", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween("Squash", 64, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDDuckObjects1[k] = gdjs.Level_322Code.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDuckObjects1.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10179708);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_322Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectHeightTween("Stretch Air", 75, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectWidthTween("Squash Air", 50, "linear", 80, false);
}
}}

}


};gdjs.Level_322Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_322Code.eventsList0(runtimeScene);
}


{


gdjs.Level_322Code.eventsList2(runtimeScene);
}


{


gdjs.Level_322Code.eventsList3(runtimeScene);
}


{


gdjs.Level_322Code.eventsList4(runtimeScene);
}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_322Code.GDDuckObjects2});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.Level_322Code.GDKeyObjects2});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_322Code.GDSparkleParticleObjects2});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_322Code.GDDuckObjects2});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects2});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_322Code.GDDuckObjects2});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects2});
gdjs.Level_322Code.eventsList6 = function(runtimeScene) {

{



}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10186372);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_322Code.GDDuckObjects1});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects1});
gdjs.Level_322Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Level_322Code.GDKeyObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDKeyObjects2 */
gdjs.Level_322Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getScene().getVariables().get("Key").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSparkleParticleObjects2Objects, (( gdjs.Level_322Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDKeyObjects2[0].getPointX("Center")), (( gdjs.Level_322Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDKeyObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_322Code.GDKeyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDKeyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Key")) > 0;
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDoorObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDoorObjects2[i].isCurrentAnimationName("Unlocked") ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDDoorObjects2[k] = gdjs.Level_322Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDoorObjects2.length = k;}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_322Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_322Code.GDDuckObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_322Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_322Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_322Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects1Objects, true, runtimeScene, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10187140);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_322Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_322Code.GDDuckObjects1});
gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDCheeseObjects1Objects = Hashtable.newFrom({"Cheese": gdjs.Level_322Code.GDCheeseObjects1});
gdjs.Level_322Code.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.Level_322Code.eventsList5(runtimeScene);
}


{


gdjs.Level_322Code.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cheese"), gdjs.Level_322Code.GDCheeseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_322Code.GDDuckObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDuckObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDCheeseObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDCheeseObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDCheeseObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCheeseObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b269d9a0a2e04d9b928d91cf538a30732681a119260676abf93ccb8e001bee8e_No Ammo.aac", false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Jumps"), gdjs.Level_322Code.GDJumpsObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDJumpsObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDJumpsObjects1[i].setString("Jumps: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDDuckObjects1.length = 0;
gdjs.Level_322Code.GDDuckObjects2.length = 0;
gdjs.Level_322Code.GDDuckObjects3.length = 0;
gdjs.Level_322Code.GDDuckObjects4.length = 0;
gdjs.Level_322Code.GDBlockObjects1.length = 0;
gdjs.Level_322Code.GDBlockObjects2.length = 0;
gdjs.Level_322Code.GDBlockObjects3.length = 0;
gdjs.Level_322Code.GDBlockObjects4.length = 0;
gdjs.Level_322Code.GDKeyObjects1.length = 0;
gdjs.Level_322Code.GDKeyObjects2.length = 0;
gdjs.Level_322Code.GDKeyObjects3.length = 0;
gdjs.Level_322Code.GDKeyObjects4.length = 0;
gdjs.Level_322Code.GDDoorObjects1.length = 0;
gdjs.Level_322Code.GDDoorObjects2.length = 0;
gdjs.Level_322Code.GDDoorObjects3.length = 0;
gdjs.Level_322Code.GDDoorObjects4.length = 0;
gdjs.Level_322Code.GDSpikeObjects1.length = 0;
gdjs.Level_322Code.GDSpikeObjects2.length = 0;
gdjs.Level_322Code.GDSpikeObjects3.length = 0;
gdjs.Level_322Code.GDSpikeObjects4.length = 0;
gdjs.Level_322Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_322Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_322Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_322Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_322Code.GDLevelObjects1.length = 0;
gdjs.Level_322Code.GDLevelObjects2.length = 0;
gdjs.Level_322Code.GDLevelObjects3.length = 0;
gdjs.Level_322Code.GDLevelObjects4.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_322Code.GDCloudsObjects1.length = 0;
gdjs.Level_322Code.GDCloudsObjects2.length = 0;
gdjs.Level_322Code.GDCloudsObjects3.length = 0;
gdjs.Level_322Code.GDCloudsObjects4.length = 0;
gdjs.Level_322Code.GDDownButtonObjects1.length = 0;
gdjs.Level_322Code.GDDownButtonObjects2.length = 0;
gdjs.Level_322Code.GDDownButtonObjects3.length = 0;
gdjs.Level_322Code.GDDownButtonObjects4.length = 0;
gdjs.Level_322Code.GDCheeseObjects1.length = 0;
gdjs.Level_322Code.GDCheeseObjects2.length = 0;
gdjs.Level_322Code.GDCheeseObjects3.length = 0;
gdjs.Level_322Code.GDCheeseObjects4.length = 0;
gdjs.Level_322Code.GDJumpsObjects1.length = 0;
gdjs.Level_322Code.GDJumpsObjects2.length = 0;
gdjs.Level_322Code.GDJumpsObjects3.length = 0;
gdjs.Level_322Code.GDJumpsObjects4.length = 0;
gdjs.Level_322Code.GDChainObjects1.length = 0;
gdjs.Level_322Code.GDChainObjects2.length = 0;
gdjs.Level_322Code.GDChainObjects3.length = 0;
gdjs.Level_322Code.GDChainObjects4.length = 0;

gdjs.Level_322Code.eventsList8(runtimeScene);

return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
