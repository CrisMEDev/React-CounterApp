# Pruebas unitarias y de integración

## Principalmente existen 2 tipos de pruebas: unitarias y de integración

**Unitarias**: Enfocadas en pequeñas funcionalidades de la aplicación

**Integración**: Como reaccionan varias piezas en conjunto

Caracteristicas de las pruebas:

- Fáciles de escribir
- Fáciles de leer
- Confiables
- Rápidas
- Principalmente unitarias

Todos los pasos aplicados anteriormente se conocen como **AAA** (Arrange\[Arreglar], Acto\[Actuar], Assert\[Afirmar])

**Arrange:** Es cuando se establece el estado inicial, se conoce como el sujeto a probar. Se inicializan variables, importaciones necesarias.

**Actuar:** Aplicamos acciones o estímulos. Se llaman acciones o métodos, simulación de clicks, realizar acciones sobre el paso anterior.

**Afirmar:** Observar el comportamiento resultante. Ej: Que algo cambie, algo incremente o nada suceda.

## Mitos

- Hacen que mi aplicación no tenga errores (Somos humanos y siempre estámos propensos a errar).
- Las pruebas no pueden fallar.
- Hacen más lenta mi aplicación (Falso ya que no es parte del bundle que se despliega a producción).
- Es una pérdida de tiempo
- Hay que probar todo.

