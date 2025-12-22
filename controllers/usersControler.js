import db from '../config/db.js';

//menampilkan data dari table users
export const getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        //jika error
        if (err) res.status(500).json({ message: err });
        //jika berhasil
        res.json(results);
    });
};

//menampilkan data dari table users berdasarkan id
export const insertUser = (req, res) => {
    const { name, email,pasword } = req.body;
  
    db.query("INSERT INTO users (name, email, pasword) VALUES (?, ?, ?)",
         [name, email, pasword], 
         (err, results) => {
      //jika error
        if (err) res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data berhasil di simpan" });
    }
);
};
//menampilkan data berdasarkan id
export const showUser = (req, res) => {
    const{ id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        //jika error
        if (err) res.status(500).json({ message: err });

        //jika data tidak ditemukan
        if (results.length === 0) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        //jika berhasil
        res.json(results[0]);
    });
};
//update data berdasarkan id
export const updateUser = (req, res) => {

    const { id } = req.params;
    const { name, email } = req.body;
    db.query("UPDATE users SET name=?, email=? WHERE id=?",
[name, email, id],
(err, results) => {
//jika error
    if (err) return res.status(500).json({ message: err });
//jika berhasil
    res.json({ message: "Data berhasil diupdate" });
    }
);
};

//delete data berdasarkan id
export const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
        //jika error
        if (err) return res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data berhasil dihapus" });
    });
};

