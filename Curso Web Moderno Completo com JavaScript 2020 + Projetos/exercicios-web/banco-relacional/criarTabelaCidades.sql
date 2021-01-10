CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);


--comentarios do trecho anterior
nome VARCHAR(255) NOT NULL,
    --INT SEM SINAL
    estado_id INT UNSIGNED NOT NULL,
    --2 DIGITOS + 2 DE PONTO FLUTUANTE
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    -- chave estrangeira estado_id referencia a coluna id da tabela estado
    FOREIGN KEY (estado_id) REFERENCES estados (id)


CREATE TABLE IF NOT EXISTS testes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

DROP TABLE IF EXISTS testes;