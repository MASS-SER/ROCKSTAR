/* Codded by @MASS SER

credits : HYPER MOD

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - MASS SER
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('MASS')}${chalk.blue.bold('SER')}
${chSlk.white.italic('MASD-SIRString')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('MASS-SER QR Code: '),
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
		);
		await conn.sendMessage(
			conn.user.jid,
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\nᴘᴏᴡᴇʀᴅ ʙʏ MASS SER',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ‼️\n\nᴘᴏᴡᴇʀᴅ ʙʏ ᴘᴇᴘᴇ sɪʀ',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\nനിങ്ങൾക്ക് session code copy ചെയ്യാൻ കഴിയുന്നില്ലെങ്കിൽ, ദയവായി വാട്ട്‌സ്ആപ്പ് പരിശോധിക്കുക. QR കോഡ് നിങ്ങളുടെ സ്വന്തം നമ്പറിലേക്ക് അയച്ചു"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\nനിങ്ങൾക്ക് session code copy ചെയ്യാൻ കഴിയുന്നില്ലെങ്കിൽ, ദയവായി വാട്ട്‌സ്ആപ്പ് പരിശോധിക്കുക. QR കോഡ് നിങ്ങളുടെ സ്വന്തം നമ്പറിലേക്ക് അയച്ചു'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
