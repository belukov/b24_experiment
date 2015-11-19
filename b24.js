console.log("loaded script!!!");


BX24.init(function()
{
	BX24.callMethod(
		"entity.get", 
		{},
		function(result)
		{
			if(result.error()) {
				console.error(result.error());
			} else {
				console.info("Список созданных хранилищ:", result.data());
			}
		}
	);
});

