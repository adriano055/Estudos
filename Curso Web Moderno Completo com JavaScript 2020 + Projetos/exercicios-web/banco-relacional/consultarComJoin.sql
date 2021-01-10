SELECT 
    e.nome as 'Estado', 
    c.nome as 'Cidade', 
    regiao as 'Região'
FROM estados e, cidades c
WHERE e.id = c.estado_id

--mesma coisa de outra forma
SELECT 
    c.nome as 'Cidade', 
    e.nome as 'Estado', 
    regiao as 'Região'
FROM estados e
inner join cidades c on e.id = c.estado_id