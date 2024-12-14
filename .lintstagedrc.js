module.exports = {
    "*.ts": ( files ) => ( [
      `ng lint corporate ${files.map((file) => `--lint-file-patterns ${file.substring(file.indexOf("/src"))}`).join(' ')}`,
    ] ),
  };