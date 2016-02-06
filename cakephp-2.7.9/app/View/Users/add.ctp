<?php
echo $this->Form->create('User');
echo $this->Form->input('username');
echo $this->Form->submit('Add a new User!!');
echo $this->Form->end();

echo $this->Form->create('User', array('action' => 'delete'));
echo $this->Form->submit('Delete All Users!!!!!');
echo $this->Form->end();

foreach ($displayUsers as $user) {
	echo $user;
}
?>