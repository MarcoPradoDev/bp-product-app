# Producto Financiero App

## **Ejecución del proyecto**

Para poder compilar el siguiente proyecto debes seguir los siguientes pasos:

1. Instalar todos los paquetes usando el comando

```xml
yarn add
```

2. Luego para correr en un emulador de android, usa el comando

```xml
yarn android
```

Te debe mostrar la siguiente pantalla 

![https://i.postimg.cc/q7p3jhBD/Whats-App-Image-2024-06-17-at-9-09-11-PM.jpg](https://i.postimg.cc/q7p3jhBD/Whats-App-Image-2024-06-17-at-9-09-11-PM.jpg)

Pasos extras: Para la comunicación con los servicios api, en mi caso use ngrok el cual me permitió obtener una url he cambiarla en la siguiente sección

```xml
/src
	/data
		/api.ts
```

Cambiar el valor de **BASE_URL** a la url que desee apuntar.

## Pruebas unitarias

Se hizo dos pruebas unitarias 

Para hacer las pruebas unitarias debe usar el comando

```xml
yarn test
```

Esto mostrara lo siguiente:

1. Prueba unitaria para el proceso de creación y consulta del producto, usando el hook ***useFinancialProducts***
2. Prueba unitara para verficación del renderizado de cada producto que se muestra en la pantalla principal usando el componente ***FinancialProducList***