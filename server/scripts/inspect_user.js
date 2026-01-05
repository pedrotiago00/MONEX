import pool from '../database.js';
import bcrypt from 'bcrypt';

const [,, usernameArg, senhaArg] = process.argv;

if (!usernameArg) {
  console.error('Usage: node inspect_user.js <username> [senha]');
  process.exit(1);
}

(async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE username = ?', [usernameArg]);
    if (rows.length === 0) {
      console.log('No user found for username:', usernameArg);
      process.exit(0);
    }

    const user = rows[0];
    console.log('User row:', user);

    if (senhaArg) {
      const isMatch = await bcrypt.compare(senhaArg, user.senha);
      console.log(`bcrypt.compare('${senhaArg}', user.senha) =>`, isMatch);
    }

    process.exit(0);
  } catch (err) {
    console.error('Error querying DB:', err);
    process.exit(1);
  }
})();