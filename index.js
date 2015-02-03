function simplifyNote(note) {
  var acc = Math.abs(note.accidentalValue());
  if (acc === 0) return note;

  var simplestNote = note;
  note.enharmonics().forEach(function(note) {
    var enharmonicAcc = Math.abs(note.accidentalValue());
    if (enharmonicAcc < acc) {
      simplestNote = note;
      acc = enharmonicAcc;
    }
  });

  return simplestNote;
}
