console.log("loaded script!!!");


BX24.init(function()
{
	BX24.callMethod(
		"entity.get", 
		{ENTITY: 'taskflow'},
		function(result)
		{
			if(result.error()) {
				console.error(result.error());
			} else {
				list = result.data();
				console.info("Список созданных хранилищ:", list);
				if(!list){
					console.log("no entity found. add it..")
					BX24.callMethod(
						'entity.add', 
						{
							'ENTITY': 'taskflow', 
							'NAME': 'TaskFlow',
							'ACCESS': {U1:'W',AU:'W'}
						}
					);
				}
			}
		}
	);
});

