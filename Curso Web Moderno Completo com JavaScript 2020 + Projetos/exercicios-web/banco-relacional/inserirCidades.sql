SELECT * FROM estados
WHERE id = 28

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Campinas', 795, 28)

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Niterói', 133.9, 22)

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Caruaru', 
    920.6, 
    (SELECT id 
        FROM estados 
        WHERE sigla = 'PE'
    )
)

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Juazeiro do Norte', 
    248.2, 
    (SELECT id 
        FROM estados 
        WHERE sigla = 'CE'
    )
)

SELECT estados.nome as 'Estado', cidades.nome as 'Cidade' 
FROM cidades, estados
WHERE cidades.estado_id = estados.id
