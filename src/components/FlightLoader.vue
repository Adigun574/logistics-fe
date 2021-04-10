<template>
  <div class="loader" v-if="false">
		<span style="--i:1;"></span>
		<span style="--i:2;"></span>
		<span style="--i:3;"></span>
		<span style="--i:4;"></span>
		<span style="--i:5;"></span>
		<span style="--i:6;"></span>
		<span style="--i:7;"></span>
		<span style="--i:8;"></span>
		<span style="--i:9;"></span>
		<span style="--i:10;"></span>
		<span style="--i:11;"></span>
		<span style="--i:12;"></span>
		<span style="--i:13;"></span>
		<span style="--i:14;"></span>
		<span style="--i:15;"></span>
		<span style="--i:16;"></span>
		<span style="--i:17;"></span>
		<span style="--i:18;"></span>
		<span style="--i:19;"></span>
		<span style="--i:20;"></span>
		<div class="rocket"></div>
	</div>
	<div class="loader" v-if="false">
		<span style="--i:1;"></span>
		<span style="--i:2;"></span>
		<span style="--i:3;"></span>
		<span style="--i:4;"></span>
		<span style="--i:5;"></span>
		<span style="--i:6;"></span>
		<span style="--i:7;"></span>
		<span style="--i:8;"></span>
		<span style="--i:9;"></span>
		<span style="--i:10;"></span>
		<span style="--i:11;"></span>
		<span style="--i:12;"></span>
		<span style="--i:13;"></span>
		<span style="--i:14;"></span>
		<span style="--i:15;"></span>
		<span style="--i:16;"></span>
		<span style="--i:17;"></span>
		<span style="--i:18;"></span>
		<span style="--i:19;"></span>
		<span style="--i:20;"></span>
		<div class="plane"></div>
	</div>
	<div class="loader">
		<span style="--i:1;"></span>
		<span style="--i:2;"></span>
		<span style="--i:3;"></span>
		<span style="--i:4;"></span>
		<span style="--i:5;"></span>
		<span style="--i:6;"></span>
		<span style="--i:7;"></span>
		<span style="--i:8;"></span>
		<span style="--i:9;"></span>
		<span style="--i:10;"></span>
		<span style="--i:11;"></span>
		<span style="--i:12;"></span>
		<span style="--i:13;"></span>
		<span style="--i:14;"></span>
		<span style="--i:15;"></span>
		<span style="--i:16;"></span>
		<span style="--i:17;"></span>
		<span style="--i:18;"></span>
		<span style="--i:19;"></span>
		<span style="--i:20;"></span>
		<div class="jet"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #03a9f4;
}

.loader {
	position: relative;
	width: 120px;
	height: 120px;
	/* margin-left: 75px; */
}

.loader span {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: rotate(calc(18deg * var(--i)));
}

.loader span::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 15px;
	height: 15px;
	background: #fff;
	border-radius: 50%;
	transform: scale(0);
	animation: animate 2s linear infinite;
	animation-delay: calc(0.1s * var(--i));
}

.rocket {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: animate2 2s linear infinite;
	animation-delay: -1s;
}

.rocket::before {
	content: "\f135";
	font-family: fontAwesome;
	position: absolute;
	top: 80px;
	left: 85px;
	color: #fff;
	font-size: 60px;
	transform: rotate(180deg);
}

.plane {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: animate2 2s linear infinite;
	animation-delay: -1s;
}

.plane::before {
	content: "\f072";
	font-family: fontAwesome;
	position: absolute;
	top: 80px;
	left: 85px;
	color: #fff;
	font-size: 60px;
	transform: rotate(180deg);
}

.jet {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: animate2 2s linear infinite;
	animation-delay: -1s;
}

.jet::before {
	content: "\f0fb";
	font-family: fontAwesome;
	position: absolute;
	top: 80px;
	left: 85px;
	color: #fff;
	font-size: 60px;
	transform: rotate(135deg);
}

@keyframes animate2 {
	0% {
		transform: rotate(10deg);
	}
	100% {
		transform: rotate(370deg);
	}
}

@keyframes animate {
	0% {
		transform: scale(0);
	}
	10% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(0);
	}
}

@keyframes rotation {
}

</style>