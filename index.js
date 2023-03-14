class HelloWorld {
  getInfo() {
    return {
      id: 'usefultools',
      name: 'Useful Tools',
      blocks: [
        {
          opcode: 'askwithtypepassword',
          blockType: Scratch.BlockType.COMMAND,
          text: 'ask [TEXT] with password style'
          arguments: {
TEXT: {
type: Scratch.ArgumentType.STRING
}

}
        }
      ]
    };
  }

  askwithtypepassword() {
    return 'World!';
  }
}

Scratch.extensions.register(new UsefulTools());