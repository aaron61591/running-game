<img width="300"src="http://img.ucweb.com/s/uae/g/01/running_game/images/loading.png">
# Running Game

H5 Running Game Base on UPlayer by U.E.M. Team.

## Quick Start

### Include Script to HTML

	<body>
		......
		<script type="text/javascript" src="release/running-game-0.1.1.js"></script>
	</body>
	
### Run Game

	var opt = {}; // game option

	RunningGame.start(opt, function(point) {

        console.log('cool!u ran: ', point);
    });
    
## Option Reference

### msg.ready

	Prompt of ready scene // 'click button to start'
	
### msg.result

	Prompt of gameover // 'cool! u ran '
	
### msg.nick

	User nickname, at the bottom right // 'UU'
	
### conf.endTime

	After the game needs to wait for time // 3000

### conf.grade

	The minimum number of combos // [0, 1, 3, 5, 7]

### conf.point

	The base point per round of each grade // [3, 4, 5, 6, 10]

### conf.fps

	FPS of each prade // [10, 20, 30, 40, 70]

### audio.bg

	Background music url

### audio.over

	Gameover music url

### id

	Dom elemenet's id

### imgPath

	Image resouce path, keep image name to replace it // 'images/'

### css

	CSS resource url
	
### extension

	Extension animation array // ['Sky', 'Cloud', 'Ground']
	you can define custom animations as follow:
	......
	var opt = {
		extension: [
			'Sky',
			'Cloud',
			'Ground',
			function(ctx, frame) {
				// TODO custom animation
            }
        ]
	}


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Aaron Peng