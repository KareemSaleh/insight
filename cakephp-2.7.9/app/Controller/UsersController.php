<?php

class UsersController extends AppController {

	var $helpers = array('Form');

	function add() {
		if (!empty($this->data)) {
			if(empty($this->data['User']['username'])) {
				$this->Flash->set('You cannot leave the username blank');
			} elseif (strlen($this->data['User']['username']) <= 3) {
				$this->Flash->set('Username length must be at least 3 characters.');
			} elseif (ctype_alnum($this->data['User']['username'])) {
				$this->Flash->set('Username must be alphanumeric.');
			} else {
				$this->User->save($this->data);
				$this->Flash->set('User saved.');
			}
		}

		/**
		 * Example: find('all', array(
		 *			     'conditions' => array('name' => 'Thomas Anderson'),
		 *			     'fields' => array('name', 'email'),
		 *			     'order' => 'field3 DESC',
		 *			     'recursive' => 2,
		 *			     'group' => 'type'));
		 */

		$users = $this->User->find('all', array());

		$size = sizeof($users);
		for ($i=0; $i<$size; $i++) {
			for ($c=0; $c<$size; $c++) {
				if ($users[$i]['User']['username'] < $users[$c]['User']['username']) {
					$tmp = $users[$c];
					$users[$c] = $users[$i];	
					$users[$i] = $tmp;
				}
			}

		}

		foreach ($users as $user) {
			array_push($displayUsers, '<b>'.$user['User']['username'].'</b> has the ID '.$user['User']['id'].'.<br />');
		}

		// This line is standard CakePHP code:
		// it ensures that whatever value $displayUsers has in this controller is made available
		// in the view as $displayUsers as well. This line works as intended.
		$this->set(compact('displayUsers'));
	}

	function delete() {
		$this->User->deleteAll('1 = 1');
		$this->redirect('add');
	}

}